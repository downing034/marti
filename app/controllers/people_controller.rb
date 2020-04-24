class PeopleController < ApiController
  before_action :set_person, only: [:show, :update, :destroy]

  def index
    @people = Person.all
    render json: @people.to_json(include: { addresses: {} })
  end

  def show
    render json: @person.to_json(include: { addresses: {} })
  end

  def create
    @person = Person.new(person_params)

    if @person.save
      render json: @person, status: :created, location: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def update
    previous_intro_email_sent = @person[:intro_email_sent]
    if @person.update(person_params)
      send_intro_email(@person) if previous_intro_email_sent == false && person_params[:intro_email_sent] == true
      render json: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @person.destroy
  end

  private
    def set_person
      @person = Person.find(params[:id])
    end

    def person_params
      params.require(:person).permit(
        :first_name,
        :last_name,
        :notes,
        :is_agent,
        :is_buyer,
        :is_seller,
        :deleted_entity,
        :completed,
        :primary_email,
        :secondary_email,
        :phone_one_label,
        :phone_one,
        :phone_two_label,
        :phone_two,
        :intro_email_sent
      )
    end

    def send_intro_email(person)
      PersonMailer.intro_email(person).deliver_now
    end
end
