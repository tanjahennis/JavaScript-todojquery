function updateCounters() {
  var ntodos = $(".todo").length;
  var ncompleted = $(".completed").length

  $("#total-count").html(ntodos);
  $("#completed-count").html(ncompleted);
  $("#todo-count").html(ntodos - ncompleted);
}

updateCounters();

function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");

  updateCounters();
  $("input[type=checkbox]").bind('change', toggleDone);
}

$("form").bind('submit', submitTodo);

function submitTodo(event) {
  // stop the form from doing the default action, submitting...
  event.preventDefault();

  var title = $("#new-todo").val();

  createTodo(title);

  $("#new-todo").val(null);
  updateCounters();

    function createTodo(title) {
      var checkboxId = "todo-" + nextTodoId();

      var listItem = $("<li></li>");
      listItem.addClass("todo");

      var checkbox = $('<input>');
      checkbox.attr('type', 'checkbox');
      checkbox.attr('id', checkboxId);
      checkbox.val(1);
      checkbox.bind('change', toggleDone);

      var space = document.createTextNode(" ");

      var label = $('<label></label>');
      label.attr('for', checkboxId);
      label.html(title);

      listItem.append(checkbox);
      listItem.append(space);
      listItem.append(label);

      $("#todolist").append( listItem );

      updateCounters();
    }

    function nextTodoId() {
      return $(".todo").length + 1;
  }
}
