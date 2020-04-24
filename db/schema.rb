# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_24_030309) do

  create_table "addresses", force: :cascade do |t|
    t.text "address"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "deleted_entity"
    t.boolean "completed", default: false
  end

  create_table "addresses_people", id: false, force: :cascade do |t|
    t.integer "address_id"
    t.integer "person_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.text "notes"
    t.boolean "is_agent"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_buyer"
    t.boolean "is_seller"
    t.string "deleted_entity"
    t.boolean "completed", default: false
    t.string "primary_email"
    t.string "secondary_email"
    t.string "phone_one_label"
    t.string "phone_one"
    t.string "phone_two_label"
    t.string "phone_two"
    t.boolean "intro_email_sent", default: false
  end

end
