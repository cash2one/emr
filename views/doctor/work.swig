{% extends 'layout.swig' -%}

{% block content -%}

<!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>书写病历<small>Edit</small></h1>
        </section>

        <!-- Main content -->
        <section class="content">
          
          <div class="row">
            
            
  <div class="col-lg-3 col-xs-6">
  <div class="form-group">
                <label><span class="label label-success">1. 选择待诊病人</span></label>
                  <select id="patients" class="form-control">

                    {% for order in orders %}
                    <option value="{{order.patient.id}}">{{loop.index}} - {{order.patient.realName}} - {{order.patient.idCard}}</option>
                    {% endfor %}

                    <option value="0">否</option>

                </select>
              </div>
  <div class="form-group">
                  <button id="load_patient" class="btn btn-success pull-right" type="button" style="">载入病人</button>
              </div>
</div><div class="col-lg-9 col-xs-6">
  <table class="table table-striped table-hover">
                  <thead>
                  <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>证件号</th>
                    <th>联系电话</th>
                    
                    
                    
                    
                    
                    
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td id="patient_realName">请先载入病人</td>
                        <td id="patient_sex">空</td>
                        <td id="patient_age">空</td>
                        <td id="patient_id_card">空</td>
                        <td id="patient_phone">空</td>
                      </tr>
                  </tbody>
                </table>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>住址</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id="patient_address">空</td>
                      <td id="patient_desc">空</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
          
          </div>
          
          

        <div class="row" style="border-top: 2px solid pink;padding-top: 20px;">
          <div class="col-lg-3 col-xs-6">
            <div class="form-group">
              <label><span class="label label-info">2. 插入疾病</span></label>
              <input type="text" class="form-control " id="disease_keyword" placeholder="">
            </div>
            <div class="form-group">
              <button id="search_disease" class="btn btn-info pull-right" type="button" style="">搜索疾病</button>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <div class="form-group">
              <label><span class="label"> </span></label>
                <select id="disease_list" ng-model="trans" class="form-control">
                  <option value="0">请搜索</option>
                </select>
            </div>
            <div class="form-group">
              <button id="load_disease" class="btn btn-info pull-right" type="button" style="">载入疾病</button>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <div class="form-group">
              <label><span class="label label-warning">3. 插入药品</span></label>
              <input type="text" class="form-control" id="medicine_keyword" placeholder="">
            </div>
            <div class="form-group">
              <button id="search_medicine" class="btn btn-warning pull-right" type="button" style="">搜索药品</button>
            </div>
          </div>

          <div class="col-lg-3 col-xs-6">
            <div class="form-group">
              <label><span class="label"> </span></label>
              <select id="medicine_list" class="form-control">
                  <option value="0">请搜索</option>
              </select>
            </div>
            <div class="form-group">
              <button id="load_medicine" class="btn btn-warning pull-right" type="button" style="">载入药品</button>
            </div>
          </div>
        </div>



  <div class="row" style="padding: 0px 10px;">
    <div class="col-xs-12" id="workPanel" style="background-color: #ffffff;border: 1px solid rgb(224, 183, 183);margin-top: 20px;margin-left: 0px;height: 400px;">
      <input type="hidden" id="patient_id" value="0">
      <!-- work panel -->
      <div id="toolPanel" contenteditable="true" style="font-size: 2em;"></div>
      <!-- end of workpanel -->
      <button class="btn btn-primary btn-lg" style="position: absolute;bottom: 10px;right: 10px;" id="addRecordBtn">生成病历</button>
    </div>
  </div>
</section>


{% endblock %}