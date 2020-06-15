var counters = [];
var id = 0;

class Counter {
  constructor(title) {
    this._id = id;
    id++;
    this.title = title;
    this.count = 0;
  }
}

function MakeNewCounter() {
  let newCounterTitle = $("#newCounterTitle").val();
  const newCounter = new Counter(newCounterTitle);
  counters.push(newCounter);

  let tempTitle = newCounter.title;
  tempTitle = tempTitle.replace(/\s+/g, '_');
  let tempId = newCounter._id;
  let newNode = [
    '<div class="col-sm-4">',
    '<div class="card">',
    '<div class="card-body">',
    '<input class="form-control card-title" type="text" value=' + tempTitle + '>',
    '<p class="addToTotal textLabel card-header" id=' + tempId + '>0</p>',
    '<button class="adjust-btn btn btn-lg btn-outline-dark" type="button" onclick="addOne(' + tempId + ')">+</button>',
    '<button class="adjust-btn btn btn-lg btn-outline-dark" type="button" onclick="removeOne(' + tempId + ')">-</button>',
    '</div>',
    '</div>',
    '</div>'
  ];

  $(newNode.join('')).appendTo($(".countersection"));
  $("#newCounterTitle").val("");
}

function addOne(element) {
  let countElement = $("#" + element);
  let count = parseInt(countElement.html());
  count++;

  if(count > 99)
    count = 99;

  countElement.html(count);

  UpdateTotal();
}

function removeOne(element) {
  let countElement = $("#" + element);
  let count = parseInt(countElement.html());
  count--;

  if(count < 0)
    count = 0;

  countElement.html(count);

  UpdateTotal();
}

function UpdateTotal() {
  let t = 0;
  $(".addToTotal").each(function(element) {
    t += parseInt(this.innerHTML);
  });

  $(".total").html(t.toString());
}
