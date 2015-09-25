{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1 style="float: left;">疾病管理<small>Medicines</small></h1>
      <button class="btn btn-sm btn-success" style="float: right;" onClick="showAddMedicinePanel()">新增药品</button>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>药品名</th>
		          <th>公司名</th>
		          <th>价格</th>
		          <th>药品描述</th>
		          <th>修改日期</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
				{% for medicine in medicines %}
		        <tr>
		          <th scope="row">{{loop.index}}</th>
		          <td>{{medicine.name}}</td>
		          <td>{{medicine.company}}</td>
		          <td>{{medicine.price}}</td>
		          <td>{{medicine.desc.substring(0,30)}}</td>
		          <td>{{medicine.updatedAt.toLocaleString()}}</td>
		          <td><a href="javascript:void(0);" onClick="showModifyMedicinePanel('{{medicine.id}}');">修改</a> <a href="javascript:void(0);" onClick="delMedicine('{{medicine.id}}');">删除</a></td>
		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="modifyMedicinePanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="panelLabel">修改药品</h4>
	      </div>
	      <div class="modal-body">
			  <div class="form-group">
			    <label for="realName">药品名称</label>
			    <input type="text" class="form-control" id="medicine_name" placeholder="药品名称">
			    <input type="hidden" class="form-control" id="medicine_id">
			  </div>
			  <div class="form-group">
			    <label for="">公司名称</label>
			    <input type="text" class="form-control" id="medicine_company" placeholder="公司名称">
			  </div>
			  <div class="form-group">
			    <label for="">价格</label>
			    <input type="text" class="form-control" id="medicine_price" placeholder="价格">
			  </div>
			  <div class="form-group">
			    <label for="">疾病描述</label>
			    <textarea id="medicine_desc" class="form-control" rows="3"></textarea>
			  </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary" onclick="updateMedicine()" id="panelSubmit">保存</button>
	      </div>
	    </div>
	  </div>
	</div>

{% endblock %}