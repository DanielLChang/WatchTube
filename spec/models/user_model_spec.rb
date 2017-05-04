require 'rails_helper'

RSpec.describe Capy, type: :model do
  # What to test?
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  # subject(:capy) { Capy.new(name: 'carlo', color: 'yellow') }
  subject(:capy) { FactoryGirl.build(:capy) }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:password_digest) }
    it { should validate_uniqueness_of(:session_token) }
  end

  describe 'associations' do
    it { should have_many(:videos) }
    it { should have_many(:comments) }
  end

  describe 'class methods' do
    
  end

end
