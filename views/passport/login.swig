{% extends 'layout.swig' -%}

{% block content -%}
    
	{{message}}
    <div class="row" style="">
			<div class="col-md-4 col-md-offset-4" style="margin-top:100px;">
				<div class="panel panel-info" style="box-shadow:0 5px 15px rgba(0, 0, 0, 0.5);">
					<div class="panel-heading"><h4>登录</h4></div>
					<div class="panel-body" style="position:relative;">
						<form role="form" action="./login" method="post">
						  <div class="form-group">
						    <label for="exampleInputEmail1">用户名</label>
						    <input type="text" class="form-control" name="username" id="exampleInputEmail1" required="">
						  </div>
						  <div class="form-group">
						    <label for="exampleInputPassword1">密码</label>
						    <input type="password" class="form-control" name="password" id="exampleInputPassword1" required="">
						  </div>
						  <button type="submit" class="btn btn-default pull-right">提交</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	}
{%- endblock %}