<!DOCTYPE html>
<html><head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %}</title>
    {# 引入常用css文件 #}
    {% include "stylesheets.swig" %}
    {% block stylesheets %}{% endblock %}
  </head>
  <body class="skin-blue sidebar-mini wysihtml5-supported">
    <div class="wrapper">

    {% include "header.swig" %}
      <!-- Left side column. contains the logo and sidebar -->
      {% include "leftSideBar.swig" %}

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">

      
        {% block content %}
        {% endblock %}


      </div><!-- /.content-wrapper -->
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> beta 1.0.1
        </div>
        <strong>Copyright © 2015 <a href="./">电子病历系统</a>.</strong> All rights reserved.
      </footer>


          
        </div>
      </aside><!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg" style="position: fixed; height: auto;"></div>
    </div><!-- ./wrapper -->


  {# 引入常用脚本 #}
  {% include "scripts.swig" %}
  {% block javascripts -%}{%- endblock %}
  </body>
</html>