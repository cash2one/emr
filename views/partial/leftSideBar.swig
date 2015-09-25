
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar" style="height: auto;">

          <!-- Sidebar user panel -->
          <div class="user-panel">
            {% if isLogged %}
            <div class="pull-left image">
              <img src="/images/avatar.png" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
              <p>{{user.realName}}</p>
              <a href="/settings"><i class="fa fa-circle text-success"></i>{{roleName[user.role]}}</a>
            </div>
            {% else %}
            <div class="pull-left image">
              <img src="/images/avatar.png" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
              <p>未登录</p>
              <a href="/login"><i class="fa fa-circle text-success"></i>游客</a>
            </div>
            {% endif %}
          </div>


          <!-- search form -->
          {# <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="搜索">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </form> #}
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="header">导航</li>
            
            {% if !isLogged %}
            <li>
              <a href="/login">
                <i class="fa fa-book"></i> <span>登录</span>
              </a>
            </li>
            <li>
              <a href="/register">
                <i class="fa fa-book"></i> <span>注册</span>
              </a>
            </li>


            {% else %}

              {# 管理员功能菜单    role=0   #}
              {% if user.role ==0 %}

              <li>
                <a href="/admin/record">
                  <i class="fa fa-edit"></i><span>病历管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/order">
                  <i class="fa fa-edit"></i><span>挂号管理</span>
                </a>
              </li>
              <li class="treeview">
                <a href="/admin/medicine">
                  <i class="glyphicon glyphicon-erase"></i>
                  <span>药品管理</span>
                </a>
              </li>
              <li>
                <a href="/admin/disease">
                  <i class="fa fa-book"></i> <span>疾病管理</span>
                </a>
              </li>
              <li class="treeview">
                <a href="/admin/user">
                  <i class="fa fa-folder"></i> <span>账户管理</span>
                </a>
              </li>

              {% endif %}

              {# 医生的功能菜单    role=1   #}

              {% if user.role ==1 %}

              <li>
                <a href="/doctor/work">
                  <i class="fa fa-edit"></i> <span>书写病历</span> <small class="label pull-right bg-green">开始坐诊</small>
                </a>
              </li>
              <li class="treeview">
                <a href="/doctor/record">
                  <i class="fa fa-folder"></i> <span>历史病历</span>
                </a>
              </li>
              <li class="treeview">
                <a href="/doctor/settings">
                  <i class="fa fa-folder"></i> <span>个人设置</span>
                </a>
              </li>

              {% endif %}
              {# 病人的功能菜单    role=2   #}
              {% if user.role ==2 %}
              <li>
                <a href="/patient/order">
                  <i class="fa fa-book"></i> <span>我要挂号</span>
                </a>
              </li>
              <li>
                <a href="/patient/record">
                  <i class="fa fa-book"></i> <span>我的病历</span>
                </a>
              </li>
              <li class="treeview">
                <a href="/patient/settings">
                  <i class="fa fa-folder"></i><span>个人设置</span>
                </a>
              </li>
              {% endif %}

            {% endif %}

          </ul> 
        </section>
        <!-- /.sidebar -->
      </aside>