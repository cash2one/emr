// - User

function showModifyUserPanel(user_id){
	$.post('/api/user/getUserById',{user_id:user_id},function(res){
		if (res.error == 0 && res.user.length!=0 ){
			var user = res.user[0];
			$('#user_id').val(user.id);
			$('#user_sex').val(user.sex);
			$('#user_realName').val(user.realName);
			$('#user_role').val(user.role);
			$('#user_desc').val(user.desc);
			$('#user_age').val(user.age);
			$('#user_address').val(user.address);
			$('#user_phone').val(user.phone);
			$('#user_idCard').val(user.idCard);

			$('#modifyUserPanel').modal();
		}
	},'json');
}


function updateUser(){
	$.post('/api/user/updateUser',{
		user_id:$('#user_id').val(),
		user_sex:$('#user_sex').val(),
		user_realName:$('#user_realName').val(),
		user_role:$('#user_role').val(),
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


// - Disease

function showModifyDiseasePanel(disease_id){
	$('#panelLabel').text("修改疾病");
	$('#panelSubmit').attr("onClick","updateDisease()");
	$.post('/api/disease/getDiseaseById',{disease_id:disease_id},function(res){
		if (res.error == 0 && res.disease.length!=0 ){
			var disease = res.disease[0];
			$('#disease_id').val(disease.id);
			$('#disease_name').val(disease.name);
			$('#disease_desc').val(disease.desc);
			$('#modifyDiseasePanel').modal();
		}
	},'json');
}
function showAddDiseasePanel(){
	$('#panelLabel').text("新增疾病");
	$('#panelSubmit').attr("onClick","addDisease()");
			$('#disease_name').val("");
			$('#disease_desc').val("");
	$('#modifyDiseasePanel').modal();

}

function updateDisease(){
	$.post('/api/disease/updateDisease',{
		disease_id:$('#disease_id').val(),
		disease_name:$('#disease_name').val(),
		disease_desc:$('#disease_desc').val()
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

function addDisease(){
	$.post('/api/disease/addDisease',{
		disease_name:$('#disease_name').val(),
		disease_desc:$('#disease_desc').val()
	},function(res){
		if (res.error == 0 ){
			alert("新增成功");
			location.reload();
			$('#modifyUserPanel').modal();
		} else {
			alert("新增失败");
		}
	},'json');
}
function delDisease(disease_id){
	if(confirm("你确定要删除本条纪录？")) {
		$.post('/api/disease/delDisease',{
			disease_id:disease_id
		},function(res){
			if (res.error == 0 ){
				alert("删除成功");
				location.reload();
			} else {
				alert("删除失败");
			}
		},'json');
	}
}



// - Medicine

function showModifyMedicinePanel(medicine_id){
	$('#panelLabel').text("修改药品");
	$('#panelSubmit').attr("onClick","updateMedicine()");
	$.post('/api/medicine/getMedicineById',{medicine_id:medicine_id},function(res){
		if (res.error == 0 && res.medicine.length!=0 ){
			var medicine = res.medicine[0];
			$('#medicine_id').val(medicine.id);
			$('#medicine_name').val(medicine.name);
			$('#medicine_company').val(medicine.company);
			$('#medicine_price').val(medicine.price);
			$('#medicine_desc').val(medicine.desc);
			$('#modifyMedicinePanel').modal();
		}
	},'json');
}
function showAddMedicinePanel(){
	$('#panelLabel').text("新增药品");
	$('#panelSubmit').attr("onClick","addMedicine()");
	$('#medicine_name').val("");
	$('#medicine_company').val("");
	$('#medicine_price').val("");
	$('#medicine_desc').val("");
	$('#modifyMedicinePanel').modal();

}
function updateMedicine(){
	$.post('/api/medicine/updateMedicine',{
		medicine_id:$('#medicine_id').val(),
		medicine_name:$('#medicine_name').val(),
		medicine_company:$('#medicine_company').val(),
		medicine_price:$('#medicine_price').val(),
		medicine_desc:$('#medicine_desc').val()
	},function(res){
		if (res.error == 0 ){
			alert("更新成功");
			location.reload();
			$('#modifyMedicinePanel').modal();
		} else {
			alert("更新失败");
		}
	},'json');
}

function addMedicine(){
	$.post('/api/medicine/addMedicine',{
		medicine_name:$('#medicine_name').val(),
		medicine_company:$('#medicine_company').val(),
		medicine_price:$('#medicine_price').val(),
		medicine_desc:$('#medicine_desc').val()
	},function(res){
		if (res.error == 0 ){
			alert("新增成功");
			location.reload();
			$('#modifyMedicinePanel').modal();
		} else {
			alert("新增失败");
		}
	},'json');
}
function delMedicine(medicine_id){
	if(confirm("你确定要删除本条纪录？")) {
		$.post('/api/medicine/delMedicine',{
			medicine_id:medicine_id
		},function(res){
			if (res.error == 0 ){
				alert("删除成功");
				location.reload();
			} else {
				alert("删除失败");
			}
		},'json');
	}
}


// - order


function updateOrderStatus(order_id,index){
	
	$.post('/api/order/updateOrderStatus',{
		order_id:order_id,
		order_status:$('#status'+index).val()
	},function(res){
		if (res.error == 0 ){
			alert("修改成功");
			location.reload();
		} else {
			alert("修改失败");
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