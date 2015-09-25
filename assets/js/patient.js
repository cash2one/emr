
var date = new Date();
var result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
$('.form_datetime').attr("data-date",result);
$('.form_datetime').datetimepicker({
	//language:  'cn',
	language:  'zh-CN',
	weekStart: 1,
	todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	forceParse: 0,
	showMeridian: 1,
	minView: 2
});



function showOrderPanel(){
	$.post('/api/user/getAllDoctors',{},function(res){
		if (res.error == 0 && res.doctors.length!=0 ){
			$('#order_doctorId').text("");

			$.each(res.doctors,function(k,v){
				var selector = '<option value="'+v.id+'">'+v.realName+'</option>';
				$('#order_doctorId').append(selector);
			});

			
			$('#orderPanel').modal();
		}
	},'json');
}


function addOrder(){
	// console.log($('#order_orderDate').val());
	
	$.post('/api/order/addOrder',{
		order_orderDate:$('#order_orderDate').val().substring(0,10),
		order_doctorId:$('#order_doctorId').val(),
		order_patientId:$('#order_patientId').val()
	},function(res){
		if (res.error == 0 ){
			alert("预约成功");
			location.reload();
			$('#modifyUserPanel').modal();
		} else {
			alert("预约失败");
		}
	},'json');

}

function cancelOrder(order_id){
	
	$.post('/api/order/updateOrderStatus',{
		order_id:order_id,
		order_status:2
	},function(res){
		if (res.error == 0 ){
			alert("取消成功");
			location.reload();
		} else {
			alert("取消失败");
		}
	},'json');
}



function updateUser(){
	$.post('/api/user/updateUser',{
		user_id:$('#user_id').val(),
		user_sex:$('#user_sex').val(),
		user_realName:$('#user_realName').val(),
		user_desc:$('#user_desc').val(),
		user_age:$('#user_age').val(),
		user_address:$('#user_address').val(),
		user_phone:$('#user_phone').val(),
		user_idCard:$('#user_idCard').val()
	},function(res){
		if (res.error == 0 ){
			alert("更新成功");
			location.reload();
			$('#modifyUserPanel').modal();
		} else {
			alert("更新失败");
		}
	},'json');
}


function showMedicalRecordPanel(record_id){

	$.post('/api/medicalRecord/getMedicalRecordById',{
		record_id:record_id
	},function(res){
		if (res.error == 0 && res.record.length!=0 ){
			var record = res.record[0];
			$('#keke').html(record.content);
			$('#medicalRecordPanel').modal();
		}
	},'json');
}