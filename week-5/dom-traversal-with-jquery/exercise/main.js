"use strict"
$(".generator").on("click", function () {
    const computer = $(this).closest(".computer")
    console.log("Processor ID:", computer.find(".processor").attr("id"))
    console.log("Computer’s data-id", computer.data("id"))
    console.log("BUS:", computer.find(".BUS").text())
})

$(".validator").on("click", function () {
    const computer = $(this).closest(".computer")
    console.log("Generator:", computer.find(".generator").text())
    console.log("MB:", computer.find(".MB").text())
    console.log("QRs:", [...computer.find(".QR")].map(qr => $(qr).text()).join(", "))
})

