class PersonMailer < ApplicationMailer
  def intro_email(person)
    @person = person
    mail(to: @person.primary_email, subject: 'Welcome to My Awesome Site')
  end
end
