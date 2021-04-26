import React from "react";

function CommandMenu(props) {
  return (
    <div class="command-menu double">
      <ul class="flex">
        <li class="tablinks" id="actionDefault">
          <a href="#">Sổ lệnh</a>
        </li>
        <li class="tablinks">
          <a href="#">Danh mục</a>
        </li>
        <li class="tablinks">
          <a href="#">Tài sản</a>
        </li>
      </ul>
    </div>
  );
}

export default CommandMenu;
