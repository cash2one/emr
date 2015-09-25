{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1>账号管理<small>Users</small></h1>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>用户名</th>
		          <th>证件号</th>
		          <th>真实姓名</th>
		          <th>性别</th>
		          <th>用户介绍</th>
		          <th>用户类型</th>
		          <th>注册日期</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
				{% for tempUser in users %}
		        <tr>
		          <th scope="row">{{loop.index}}</th>
		          <td>{{tempUser.username}}</td>
		          <td>{{tempUser.idCard}}</td>
		          <td>{{tempUser.realName}}</td>
		          <td>{{tempUser.sex}}</td>
		          <td>{{tempUser.desc}}</td>
		          <td>{{roleName[tempUser.role]}}</td>
		          <td>{{tempUser.createdAt.toLocaleString()}}</td>
		          <td><a href="javascript:void(0);" onClick="showModifyUserPanel('{{tempUser.id}}');">修改</a></td>
		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="modifyUserPanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">修改用户</h4>
	      </div>
	      <div class="modal-body">
			  <div class="form-group">
			    <label for="realName">真实姓名</label>
			    <input type="text" class="form-control" id="user_realName" placeholder="姓名">
			    <input type="hidden" class="form-control" id="user_id">
			  </div>
			  <div class="form-group">
			    <label for="">证件号</label>
			    <input type="text" class="form-control" id="user_idCard" placeholder="证件号">
			  </div>
			  <div class="form-group">
			    <label for="">年龄</label>
			    <input type="text" class="form-control" id="user_age" placeholder="年龄">
			  </div>
			  <div class="form-group">
			    <label for="">联系电话</label>
			    <input type="text" class="form-control" id="user_phone" placeholder="联系电话">
			  </div>
			  <div class="form-group">
			    <label for="">地址</label>
			    <input type="text" class="form-control" id="user_address" placeholder="地址">
			  </div>
			  <div class="form-group">
			    <label for="">性别</label>
			  	<select id="user_sex" class="form-control">
				  <option value="m">m</option>
				  <option value="f">f</option>
				</select>
			  </div>
			  <div class="form-group">
			    <label for="">用户角色</label>
			  	<select id="user_role" class="form-control">
				  <option value="0">管理员</option>
				  <option value="1">医生</option>
				  <option value="2">患者</option>
				</select>
			  </div>
			  <div class="form-group">
			    <label for="">自我描述</label>
			    <textarea id="user_desc" class="form-control" rows="3"></textarea>
			  </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary" onclick="updateUser()">保存</button>
	      </div>
	    </div>
	  </div>
	</div>

{% endblock %}