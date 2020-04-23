class AddressesController < ApiController
  before_action :set_address, only: [:show, :update, :destroy]

  def index
    @addresses = Address.all
    render json: @addresses.to_json(include: { people: {} })
  end

  def show
    render json: @address.to_json(include: { people: {} })
  end

  def create
    @address = Address.new(address_params)
    if @address.save
      render json: @address, status: :created, location: @address
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  def update
    if @address.update(address_params)
      render json: @address
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @address.destroy
  end

  private
    def set_address
      @address = Address.find(params[:id])
    end

    def address_params
      params.require(:address).permit(:address, :city, :state, :zip_code, :country, :deleted_entity, :completed)
    end
end
