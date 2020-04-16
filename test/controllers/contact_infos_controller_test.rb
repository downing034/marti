require 'test_helper'

class ContactInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact_info = contact_infos(:one)
  end

  test "should get index" do
    get contact_infos_url, as: :json
    assert_response :success
  end

  test "should create contact_info" do
    assert_difference('ContactInfo.count') do
      post contact_infos_url, params: { contact_info: { person_id: @contact_info.person_id, phone_one: @contact_info.phone_one, phone_one_label: @contact_info.phone_one_label, phone_two: @contact_info.phone_two, phone_two_label: @contact_info.phone_two_label, primary_email: @contact_info.primary_email, secondary_email: @contact_info.secondary_email } }, as: :json
    end

    assert_response 201
  end

  test "should show contact_info" do
    get contact_info_url(@contact_info), as: :json
    assert_response :success
  end

  test "should update contact_info" do
    patch contact_info_url(@contact_info), params: { contact_info: { person_id: @contact_info.person_id, phone_one: @contact_info.phone_one, phone_one_label: @contact_info.phone_one_label, phone_two: @contact_info.phone_two, phone_two_label: @contact_info.phone_two_label, primary_email: @contact_info.primary_email, secondary_email: @contact_info.secondary_email } }, as: :json
    assert_response 200
  end

  test "should destroy contact_info" do
    assert_difference('ContactInfo.count', -1) do
      delete contact_info_url(@contact_info), as: :json
    end

    assert_response 204
  end
end
