{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1 style="float: left;">疾病管理<small>Diseases</small></h1>
      <button class="btn btn-sm btn-success" style="float: right;" onClick="showAddDiseasePanel()">新增疾病</button>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>疾病名</th>
		          <th>疾病描述</th>
		          <th>修改日期</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
				{% for disease in diseases %}
		        <tr>
		          <th scope="row">{{loop.index}}</th>
		          <td>{{disease.name}}</td>
		          <td>{{disease.desc.substring(0,30)}}</td>
		          <td>{{disease.updatedAt.toLocaleString()}}</td>
		          <td><a href="javascript:void(0);" onClick="showModifyDiseasePanel('{{disease.id}}');">修改</a> <a href="javascript:void(0);" onClick="delDisease('{{disease.id}}');">删除</a></td>
		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="modifyDiseasePanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="panelLabel">修改疾病</h4>
	      </div>
	      <div class="modal-body">
			  <div class="form-group">
			    <label for="realName">疾病名称</label>
			    <input type="text" class="form-control" id="disease_name" placeholder="疾病名称">
			    <input type="hidden" class="form-control" id="disease_id">
			  </div>
			  <div class="form-group">
			    <label for="">疾病描述</label>
			    <textarea id="disease_desc" class="form-control" rows="3"></textarea>
			  </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary" onclick="updateDisease()" id="panelSubmit">保存</button>
	      </div>
	    </div>
	  </div>
	</div>

{% endblock %}