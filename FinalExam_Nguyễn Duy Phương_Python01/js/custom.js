$(function(){
    $(".header").load("templates/header.html"); 
    $(".main").load("templates/main.html"); 
    $(".footer").load("templates/footer.html"); 
  });

// đi đến trang chủ
function viewHome(){
  $(".main").load("templates/main.html"); 
}

function viewEmployee(){
  $(".main").load("employee/main.html", function(){
    initTable();
  }); 
}


//khởi tạo dữ liệu cho bảng
function Employee(id, GroupName, Member, Creator, CreateDate){
    this.id = id;
    this.GroupName = GroupName;
    this.Member = Member;
    this.Creator = Creator;
    this.CreateDate = CreateDate;
}
 
 

//khởi tạo danh sách cho bảng nhân viên
function initTable(){
  $('tbody').empty();
  $.ajax({
    url: 'https://621a321381d4074e85bbea88.mockapi.io/employee',
    type: 'GET', 
    success:function(result){
        result.forEach(function(item){
          $('tbody').append(
            '<tr>'+
                '<td>'+ item.id +'</td>'+
                '<td>'+ item.GroupName +'</td>'+
                '<td>'+ item.Member +'</td>'+
                '<td>'+ item.Creator +'</td>'+
                '<td>'+ item.CreateDate +'</td>'+
                '<td>'+
                    '<a class="edit" title="Edit" data-toggle="tooltip" onclick ="opendUpdateModal('+ item.id +')"><i class="material-icons">&#xE254;</i></a>'+
                    '<a class="delete" title="Delete" data-toggle="tooltip" onclick ="deleteEmployee('+ item.id +')"><i class="material-icons">&#xE872;</i></a>'+
                '</td>'+
            '</tr>'
          )
        }); 
    }
  }); 
}

function openAddNewModal(){
  $("#myModal").modal("show");
  reset();
}

function hideAddNewModal(){
  $("#myModal").modal("hide");
}

function createNewEmployee(){
    var GroupName = document.getElementById("GroupName").value;
    var Member = document.getElementById("Member").value;
    var Creator = document.getElementById("Creator").value;
    var CreateDate = document.getElementById("CreateDate").value;


    var employee = {
      GroupName: GroupName,
      Member: Member,
      Creator: Creator,
      CreateDate: CreateDate

    }
    // gọi api thêm mới nhân viên
    $.ajax({
      url: 'https://621a321381d4074e85bbea88.mockapi.io/employee',
      type: 'POST',
      data: employee,
      async : false,    
      success:function(result){
      }
    });
  
    initTable();
    hideAddNewModal();
}

function opendUpdateModal(employeeId){
    openAddNewModal();
     // gọi api lấy nhân viên theo id
     $.ajax({
      url: 'https://621a321381d4074e85bbea88.mockapi.io/employee/' + employeeId,
      type: 'GET', 
      success:function(result){
          //fill data
          document.getElementById("employeeId").value = result.id;
          document.getElementById("GroupName").value = result.GroupName;
          document.getElementById("Member").value = result.Member;
          document.getElementById("Creator").value = result.Creator;
          document.getElementById("CreateDate").value = result.CreateDate;
      }
    }); 
}


function reset(){
  document.getElementById("employeeId").value = "";
  document.getElementById("GroupName").value = "";
  document.getElementById("Member").value = "";
  document.getElementById("Creator").value = "";
  document.getElementById("CreateDate").value = "";
}


function updateEmployee(employeeId){
  var GroupName = document.getElementById("GroupName").value;
  var Member = document.getElementById("Member").value;
  var Creator = document.getElementById("Creator").value;
  var CreateDate = document.getElementById("CreateDate").value;


  var employee = {
    GroupName: GroupName,
    Member: Member,
    Creator: Creator,
    CreateDate: CreateDate

  }
  // gọi api để cập nhật nhân viên 
  $.ajax({
    url: 'https://621a321381d4074e85bbea88.mockapi.io/employee/' + employeeId ,
    type: 'PUT',
    data: employee,
    async : false,    
    success:function(result){
     
    }
  });
  initTable();
  hideAddNewModal();
}

function saveEmployee(){
  var employeeId = document.getElementById("employeeId").value;

  if(employeeId == null || employeeId == ""){
      createNewEmployee();
  }else{
      updateEmployee(employeeId);
  }
  showAlertSuccess();
}

function deleteEmployee(employeeId){
  var result = confirm("có chắc chắn xóa không?");
  if(result == true){
      $.ajax({
        url: 'https://621a321381d4074e85bbea88.mockapi.io/employee/' + employeeId ,
        type: 'DELETE', 
        async : false,    
        success:function(result){
         
        }
      });

       initTable();
       showAlertSuccess();
  }
}


function showAlertSuccess(){
  $("#alert-success").fadeTo(6600,200).slideUp(2000,function(){
      $("#alert-success").slideUp(5500);
  });
}