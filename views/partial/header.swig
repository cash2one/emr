<header class="main-header">
	<!-- Logo -->
	<a href="/" class="logo">
	  <!-- mini logo for sidebar mini 50x50 pixels -->
	  <span class="logo-mini"><b>EMR</b></span>
	  <!-- logo for regular state and mobile devices -->
	  <span class="logo-lg" style="background-image: url(/images/EMR.png);background-repeat: no-repeat;height: 50px;background-position: center;"></span>
	</a>

	<!-- Header Navbar: style can be found in header.less -->
	<nav class="navbar navbar-static-top" role="navigation">
	  <!-- Sidebar toggle button-->
	  <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
	    <span class="sr-only">Toggle navigation</span>
	  </a>
	  <div class="navbar-custom-menu">
	    <ul class="nav navbar-nav">
	      <li class="dropdown user user-menu">
	        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
	          <img src="/images/avatar.png" class="user-image" alt="User Image">
	          <span class="hidden-xs">
	          	{% if isLogged %}
	          		{{user.realName}} {{roleName[user.role]}}
	          	{% else %}
	          		无用户登录
	          	{% endif %}
	          </span>
	        </a>
			{% if isLogged %}
	        <ul class="dropdown-menu" style="width: auto;border: 1px solid rgba(202, 143, 143, 0.52);">{# 
	          <li><a href="/settings">个人中心</a></li>
	          <li role="separator" class="divider"></li> #}
	          <li><a href="/logout">登出</a></li>
	        </ul>
	        {% endif %}
	      </li>
	    </ul>
	  </div>
	</nav>

</header>