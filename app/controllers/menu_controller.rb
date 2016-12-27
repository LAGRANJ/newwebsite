class MenuController < ApplicationController
  def items    

  	@menu = Menu.find(params["menu_id"].to_i) if params["menu_id"] != ''

  	if @menu != nil
  		@menus = @menu.submenus 
  	else 
		@menus = Menu.where(parent_id:nil)
	end 
    respond_to do |format|
      format.html { render plain: "custom action" }
      format.js {}
      format.json {render plain:"alert(123);"}
    end
  end
end
