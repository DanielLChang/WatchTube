require 'rails_helper'
begin
  USERS_CONTROLLER
rescue
  USERS_CONTROLLER = nil
end

RSpec.describe UsersController, type: :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "renders the new template" do
        post :create, user: { name: 'Jeanie' }
        expect(response).to render_template(:new)
      end
    end

    context "with valid params" do
      it "redirect to user page on success" do
        post :create, user: { username: 'Joseph', password: 'maroon' }
        expect(response).to redirect_to(user_url(User.find_by(name: 'Joseph')))
      end
    end
  end
end
