{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1 style="float: left;">挂号管理<small>Order</small></h1>
      <button class="btn btn-sm btn-success" style="float: right;" onClick="showOrderPanel()">预约挂号</button>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>预约时间</th>
		          <th>预约医生</th>
		          <th>预约状态</th>
		          <th>预约生成时间</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
				{% for order in orders %}
		        <tr>
		          <th scope="row">{{loop.index}}</th>
		          <td>{{order.orderDate}}</td>
		          <td>{{order.doctor.realName}}</td>
		          <td>{{orderStatusName[order.status]}}</td>
		          <td>{{order.createdAt.toLocaleString()}}</td>
		          
		          {% if order.status == 0 %}
		          <td><a href="javascript:void(0);" onClick="cancelOrder('{{order.id}}');">取消预约</a>
		          {% else %}
		          <td>无</td>
		          {% endif %}

		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="orderPanel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="panelLabel">预约挂号</h4>
	      </div>
	      <div class="modal-body">
			  <div class="form-group">
			    <label for="">1. 选择医生</label>
			  	<select id="order_doctorId" class="form-control">
				</select>
			  </div>
			  <div class="form-group">
				<label>2. 就诊日期</label>
				<div class="input-group date form_datetime" data-date-format="yyyy-mm-dd" data-link-field="order_orderDate" data-date="">
					<input class="form-control" size="16" type="text" value="" readonly="">
					<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
				</div>
				<input type="hidden"  id="order_orderDate">
				<input type="hidden"  id="order_patientId" value="{{user.id}}">
			  </div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button type="button" class="btn btn-primary" onclick="addOrder()" id="panelSubmit">预约</button>
	      </div>
	    </div>
	  </div>
	</div>

{% endblock %}