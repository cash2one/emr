

function getUser(){
	var patient_id = $("#patients").val();
	if ( patient_id==0 ) {
		return;
	}

	$.post('/api/user/getUserById',{
		user_id:patient_id
	},function(res){
		if (res.error == 0 && res.user.length!=0 ){
			var user = res.user[0];
			$('#patient_id').val(user.id);
			$('#patient_realName').text(user.realName);
			$('#patient_sex').text(user.sex=="m"?"男":"女");
			$('#patient_age').text(user.age);
			$('#patient_id_card').text(user.idCard);
			$('#patient_phone').text(user.phone);
			$('#patient_address').text(user.address);
			$('#patient_desc').text(user.desc);
		}
	},'json');
}

$("#load_patient").click(getUser);

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


function searchDisease(){
	var keyword = $("#disease_keyword").val();
	if (!keyword) return;

	$.post('/api/disease/searchDisease',{
		keyword: keyword
	},function(res){
		if (res.error == 0 ){
			$("#disease_list").html("");
			if (res.diseases.length == 0) {
				$("#disease_list").append('<option value="0">无结果</option>');
				return;
			}
			$.each(res.diseases,function(k,v){
				$("#disease_list").append('<option value="'+v.id+'">'+v.name+'</option>');
			});
		} else {
			alert("搜索失败");
		}
	},'json');

}

$("#search_disease").click(searchDisease);

function searchMedicine(){
	var keyword = $("#medicine_keyword").val();
	if (!keyword) return;

	$.post('/api/medicine/searchMedicine',{
		keyword: keyword
	},function(res){
		if (res.error == 0 ){
			$("#medicine_list").html("");
			if (res.medicines.length == 0) {
				$("#medicine_list").append('<option value="0">无结果</option>');
				return;
			}
			$.each(res.medicines,function(k,v){
				$("#medicine_list").append('<option value="'+v.id+'">'+v.name+'</option>');
			});
		} else {
			alert("搜索失败");
		}
	},'json');

}

$("#search_medicine").click(searchMedicine);


function pasteHtmlAtCaret(html, selectPastedContent) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                if (selectPastedContent) {
                    range.setStartBefore(firstNode);
                } else {
                    range.collapse(true);
                }
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        // IE < 9
        var originalRange = sel.createRange();
        originalRange.collapse(true);
        sel.createRange().pasteHTML(html);
        if (selectPastedContent) {
            range = sel.createRange();
            range.setEndPoint("StartToStart", originalRange);
            range.select();
        }
    }
}

$("#load_disease").click(function() {
	var id = $("#disease_list").val();
	if (id==0) return;
	var name = $('#disease_list').find("option:selected").text();
    $('#toolPanel').focus();
    pasteHtmlAtCaret('<span class="label label-info label-disease" data-id="'+id+'" data-type="disease" contenteditable="false" >'+name+'</span>', false);
});

$("#load_medicine").click(function() {
	var id = $("#medicine_list").val();
	if (id==0) return;
	var name = $('#medicine_list').find("option:selected").text();
    $('#toolPanel').focus();
    pasteHtmlAtCaret('<span class="label label-warning label-medicine" data-id="'+id+'" data-type="medicine" contenteditable="false">'+name+'</span>', false);
});



function addRecord(){
	// console.log($('#order_orderDate').val());
	if (!confirm("是否提交病例？")) {
		return;
	}
	var patient_id = $('#patient_id').val();
	if (patient_id==0) {
		alert("请先载入病人！");
		return;
	}
	var content = $('#toolPanel').html();
	if (!content) {
		alert("请先输入病历！");
		return;
	}

	$.post('/api/medicalRecord/addMedicalRecord',{
		record_content:content,
		record_patientId:patient_id
	},function(res){
		if (res.error == 0 ){
			alert("生成病历成功");
			location.reload();
		} else {
			alert("生成病历失败");
		}
	},'json');

}
function updateRecord(){
	// console.log($('#order_orderDate').val());
	if (!confirm("是否提交病例？")) {
		return;
	}

	var record_id = $('#record_id').val();
	var content = $('#toolPanel').html();
	if (!content) {
		alert("请先输入病历！");
		return;
	}

	$.post('/api/medicalRecord/updateMedicalRecord',{
		record_content:content,
		record_id:record_id
	},function(res){
		if (res.error == 0 ){
			alert("病历更新成功");
			window.location.href="/doctor/record";
		} else {
			alert("病历更新失败");
		}
	},'json');

}


$("#updateRecordBtn").click(updateRecord);

$("#addRecordBtn").click(addRecord);



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
