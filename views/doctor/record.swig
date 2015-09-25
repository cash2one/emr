{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1>历史病历<small>MedicalRecords</small></h1>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>所属病人</th>
		          <th>证件号</th>
		          <th>联系电话</th>
		          <th>生成时间</th>
		          <th>修改时间</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
				{% for record in records %}
		        <tr>
		          <th scope="row">{{loop.index}}</th>
		          <td>{{record.patient.realName}}</td>
		          <td>{{record.patient.idCard}}</td>
		          <td>{{record.patient.phone}}</td>
		          <td>{{record.createdAt.toLocaleString()}}</td>
		          <td>{{record.updatedAt.toLocaleString()}}</td>
		          <td><a href="javascript:void(0);" onClick="showMedicalRecordPanel('{{record.id}}');">查看病历</a> <a href="/doctor/record/edit?id={{record.id}}" >修改病历</a></td>
		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="medicalRecordPanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">病人病历</h4>
	      </div>
	      <div class="modal-body">
	      	<div id="keke" style="line-height: 2;"></div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
	      </div>
	    </div>
	  </div>
	</div>

{% endblock %}