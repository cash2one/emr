{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1>个人设置<small>Settings</small></h1>
    </section>
	<div class="row">
		<div class="col-xs-12 col-sm-6" style="padding: 10px 30px;">
			  <div class="form-group">
			    <label for="realName">真实姓名</label>
			    <input type="text" class="form-control" id="user_realName" placeholder="姓名" value="{{req.user.realName}}">
			    <input type="hidden" class="form-control" id="user_id" value="{{req.user.id}}">
			  </div>
			  <div class="form-group">
			    <label for="">证件号</label>
			    <input type="text" class="form-control" id="user_idCard" placeholder="证件号" value="{{req.user.idCard}}">
			  </div>
			  <div class="form-group">
			    <label for="">年龄</label>
			    <input type="text" class="form-control" id="user_age" placeholder="年龄" value="{{req.user.age}}">
			  </div>
			  <div class="form-group">
			    <label for="">联系电话</label>
			    <input type="text" class="form-control" id="user_phone" placeholder="联系电话" value="{{req.user.phone}}">
			  </div>
			  <div class="form-group">
			    <label for="">地址</label>
			    <input type="text" class="form-control" id="user_address" placeholder="地址" value="{{req.user.address}}">
			  </div>
		</div>
		<div class="col-xs-12 col-sm-6" style="padding: 10px 30px;">
			  <div class="form-group">
			    <label for="">性别</label>
			  	<select id="user_sex" class="form-control"  value="{{req.user.sex}}">
				  <option value="m" 
				  {% if req.user.sex == "m" %}
				  	selected="selected" 
				  {% endif %}
				  >m</option>
				  <option value="f"
				  {% if req.user.sex == "f" %}
				  	selected="selected" 
				  {% endif %}
				  >f</option>
				</select>
			  </div>
			  <div class="form-group">
			    <label for="">自我描述</label>
			    <textarea id="user_desc" class="form-control" rows="3">{{req.user.desc}}</textarea>
			  </div>
	        <button type="button" class="btn btn-primary" onclick="updateUser()">保存</button>
		</div>
	</div>

{% endblock %}