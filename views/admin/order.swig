{% extends 'layout.swig' -%}

{% block content -%}

	<section class="content-header">
      <h1 >挂号管理<small>Order</small></h1>
    </section>
	<div class="row">
		<div class="col-xs-12 table-column">
			<table class="table table-bordered table-admin">
		      <thead>
		        <tr>
		          <th>#</th>
		          <th>预约时间</th>
		          <th>预约患者</th>
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
		          <td>{{order.patient.realName}}</td>
		          <td>{{order.doctor.realName}}</td>
		          <td>


			  	<select id="status{{loop.index}}" class="form-control">
			  		{% for status in orderStatusName %}
				  	<option 
				  	{% if order.status == loop.index0 %}
				  		selected="selected" 
				  	{% endif %}
				  	value="{{loop.index0}}">{{status}}</option>
				    {% endfor %}
				</select>

		          </td>
		          <td>{{order.createdAt.toLocaleString()}}</td>
		          <td><a href="javascript:void(0);" onClick="updateOrderStatus('{{order.id}}',{{loop.index}});">修改预约</a>

		        </tr>
				{% endfor %}
		      </tbody>
		    </table>
		</div>
	</div>


{% endblock %}