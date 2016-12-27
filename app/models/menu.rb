class Menu < ApplicationRecord
	has_many :submenus, class_name:"Menu",foreign_key:"parent_id"
	belongs_to :parent, class_name:"Menu", optional: true
end
