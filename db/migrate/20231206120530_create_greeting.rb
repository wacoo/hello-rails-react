class CreateGreeting < ActiveRecord::Migration[7.1]
  def change
    drop_table :greetings
    create_table :greetings do |t|
      t.string :message

      t.timestamps
    end
  end
end
