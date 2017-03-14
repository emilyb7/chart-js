console.log("init");

var smile = new Image ();
smile.src= `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMTggMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXAgNjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJzY3JlZW5fZGVzaWduIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaVBob25lLVNFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjAwMDAwMCwgLTUxMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExOC4wNDUwOTgsIDUyNy41MzkyODgpIHJvdGF0ZSgtMTMuMDAwMDAwKSB0cmFuc2xhdGUoLTExOC4wNDUwOTgsIC01MjcuNTM5Mjg4KSB0cmFuc2xhdGUoMTExLjU0NTA5OCwgNTExLjAzOTI4OCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjgyNDA4MywgMC4wMDAwMDApIiBvcGFjaXR5PSIwLjY5MjUzODQ5NiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjMyMjk5NTc1Miw2LjY4ODgwNDMxIEMwLjMyMjk5NTc1Miw2LjY4ODgwNDMxIC0wLjgyNDcyMzU3OSwzLjUzMDUyNzcgMS4yMDY4MjAyMiwxLjc3MTM2ODg2IEMzLjIzODM2NDAzLDAuMDEyMjEwMDI1IDYuMDYzMTQ1ODcsLTAuMzg0NTE3ODg2IDcuMDM2ODc3MTMsMC4zNTA0Njc5NDMgQzguMDEwNjA4MzgsMS4wODU0NTM3NyA3LjI5OTIxODUyLDIuOTQyNTE3MzEgNi41NjUwMTIxNSwzLjA4NDc0NDI2IEM1LjgzMDgwNTc3LDMuMjI2OTcxMiAzLjMwMTg2MTkxLDIuODU3NzY3NjUgMy4xMTIwNDc5MSw0LjA3NjEyOTU4IEMyLjkyMjIzMzkxLDUuMjk0NDkxNTIgMy4yODk2MjgzNyw3LjAxMDUwMTEyIDMuMjg5NjI4MzcsNy4wMTA1MDExMiBMMC4zMjI5OTU3NTIsNi42ODg4MDQzMSBaIiBpZD0iUGF0aC05IiBzdHJva2U9IiMyMzY0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNTQ4ODE0MTI2LDcuMDMzMTI4MTEgQzAuNTQ4ODE0MTI2LDcuMDMzMTI4MTEgLTAuNjU3OTg3MDc4LDMuNzEyMjcwOSAxLjQ3ODEzNTc5LDEuODYyNTU0NzMgQzMuNjE0MjU4NjUsMC4wMTI4Mzg1NjgyIDYuNTg0NDUzNTgsLTAuNDA0MzExOTU2IDcuNjA4MzEwMjEsMC4zNjg1MDkyMDIgQzguNjMyMTY2ODUsMS4xNDEzMzAzNiA3Ljg4NDE1NjMyLDMuMDkzOTkxMTMgNy4xMTIxNTQ3NCwzLjI0MzUzOTU4IEM2LjM0MDE1MzE2LDMuMzkzMDg4MDMgMy42ODEwMjUyNSwzLjAwNDg3ODc2IDMuNDgxNDQwMDgsNC4yODU5NTkwOCBDMy4yODE4NTQ5LDUuNTY3MDM5NCAzLjY2ODE2MTk2LDcuMzcxMzg1MTEgMy42NjgxNjE5Niw3LjM3MTM4NTExIEwwLjU0ODgxNDEyNiw3LjAzMzEyODExIFoiIGlkPSJQYXRoLTkiIGZpbGw9IiM0QjkwNUUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNC43Mzg3NDgpIiBzdHJva2U9IiMyMzY0QUEiIGZpbGw9IiNGN0Y5RjkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4wMTg0NzM5NjQ4LDUuNjE0OTM2NjMgQzAuMDE4NDczOTY0OCw1LjYxNDkzNjYzIDAuOTI3NzYyMTA4LDExLjU0MTg4MzYgMS42MzExNzQ5LDE3LjE5NzY3MzYgQzIuMzM0NTg3NjksMjIuODUzNDYzNSAyLjE2Nzc4NDk2LDI2LjA2MjM5MDIgNC42NjE3OTc4MSwyNi43NjUzOTE5IEMxMC4yOTc2NTE2LDI4LjM1NDAwMjYgMTEuNjczMDk2NiwyMi45NTI4NDY2IDExLjY3MzA5NjYsMjIuOTUyODQ2NiBDMTEuNjczMDk2NiwyMi45NTI4NDY2IDcuNDA3MTM5MDQsMjYuMjA3MjM5OSA3LjA2NjA3MTkzLDIxLjcyODA4MTcgTDguODQ5NjcyMzksNS40ODI3NzE2MiBDOC44NDk2NzIzOSw1LjQ4Mjc3MTYyIDkuNDI4MDQyNzQsMC4wNjMyMjk3OTg2IDQuNzIzMjU4MzUsMC4wNjMyMjk3OTg2IEMwLjAxODQ3Mzk2NDgsMC4wNjMyMjk3OTg2IDAuMDE4NDczOTY0OCw1LjYxNDkzNjYzIDAuMDE4NDczOTY0OCw1LjYxNDkzNjYzIFoiIGlkPSJQYXRoLTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4wMTg0NzM5NjQ4LDkuNzE3OTE5NDggQzAuMDE4NDczOTY0OCw5LjcxNzkxOTQ4IDEuMDI4OTM1MTEsMTUuODIwNTk1NiAxLjgxMDYxMzk0LDIxLjY0NDA3NTEgQzIuNTkyMjkyNzcsMjcuNDY3NTU0NiAyLjQwNjkzMDU0LDMwLjc3MTYyMzMgNS4xNzg0NDI2MSwzMS40OTU0Njg2IEMxMS40NDEzNzYyLDMzLjEzMTE4MDIgMTIuOTY5ODYxNywyNy41Njk4ODQzIDEyLjk2OTg2MTcsMjcuNTY5ODg0MyBDMTIuOTY5ODYxNywyNy41Njk4ODQzIDguMjI5MjQ3NCwzMC45MjA3Njc4IDcuODUwMjMxMDcsMjYuMzA4ODA2MSBMOS44MzIyODU5LDkuNTgxODM1ODkgQzkuODMyMjg1OSw5LjU4MTgzNTg5IDEwLjQ3NTAwOTMsNC4wMDE2MDkwNiA1LjI0Njc0MTYzLDQuMDAxNjA5MDYgQzAuMDE4NDczOTY0OCw0LjAwMTYwOTA2IDAuMDE4NDczOTY0OCw5LjcxNzkxOTQ4IDAuMDE4NDczOTY0OCw5LjcxNzkxOTQ4IFoiIGlkPSJQYXRoLTMiIGZpbGw9IiNGRjUwMjMiIG9wYWNpdHk9IjAuNTcxODk3NjQ1Ij48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==`;



Chart.pluginService.register({
    afterUpdate: function(chart) {

        chart.config.data.datasets[0]._meta[0].data[0]._model.pointStyle = smile;
    }
});

var chart = document.getElementById('myCanvas');

chart.height = 500;
chart.width = 1000;


var data = {
  labels: Array(13).fill(""),
  datasets: [{
    data: [1, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ],
    pointStyle: "circle",
    lineTension: 0.3,
    borderColor: "hotpink",
    fill: false,
    pointStyle: smile,
    radius: 20,
  }],
  backgroundColor: "blue",
}

var options = {
  responsive: true,
  maintainAspectRatio: false,
  onClick: function(e, a) {
    if (a.length) {
      document.getElementById("show-message").innerHTML = "You clicked on node " + a[0]._index;
    }
  },
  scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,   // minimum value will be 0.
                stepSize: 1,
                fontColor: '#fff',

            },
            gridLines: {
              color: '#fff',
            }
        }],
        xAxes: [{
            display: false,
            ticks: {
                beginAtZero: true,   // minimum value will be 0.
                stepSize: 1,
            },
            gridLines: {
              color: '#fff',
            }
        }],

    },
    legend: {
      display: false,
    },


}

var myLineChart = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});
