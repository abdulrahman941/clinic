const selectClinic = document.getElementById("clinic");
const selectday = document.getElementById("day");
const selecttime = document.getElementById("time");
const patientName = document.getElementById("patientName");
const mobileNumber = document.getElementById("mobileNumber");

// مصفوفة لحفظ البيانات المخزنة

const appointments = [];



function createAppointment() {

  const clinic = selectClinic.value.trim();

  const day = selectday.value.trim();

  const time = selecttime.value.trim();

  const name = patientName.value.trim();

  const mobile = mobileNumber.value.trim();



  // التحقق من أن جميع الحقول تم اختيارها أو كتابتها

  if (!clinic || clinic === "" || !day || day === "" || !time || time === "" || !name || !mobile) {

    displayMessage("يرجى التأكد من ملء جميع الحقول واختيار العيادة واليوم والوقت", "error");

    return;

  }



  // التحقق البسيط من رقم الهواتف (مثلاً يتكون من أرقام فقط)

  if (isNaN(mobile)) {

    displayMessage("يرجى إدخال رقم هاتف صحيح", "error");

    return;

  }



  // إنشاء كائن الحجز الجديد

  const newAppointment = {

    id: Date.now(),

    clinic,

    day,

    time,

    patientName: name,

    mobileNumber: mobile

  };



  // حفظ في القائمة

  appointments.push(newAppointment);



  // إظهار رسالة النجاح

  displayMessage(`تم حجز الموعد بنجاح للمريض: ${name}`, "success");



  // إعادة ضبط حقول الإدخال والقوائم

  resetForm();

}



function displayMessage(message, type) {

  let msgContainer = document.getElementById("msgContainer");

 

  if (!msgContainer) {

    msgContainer = document.createElement("div");

    msgContainer.id = "msgContainer";

    // إضافة تصميم بسيط للرسائل

    msgContainer.style.cssText = "padding: 10px; margin-bottom: 15px; border-radius: 5px; font-weight: bold;";

    document.body.prepend(msgContainer);

  }



  msgContainer.textContent = message;

 

  if (type === "error") {

    msgContainer.style.backgroundColor = "#f8d7da";

    msgContainer.style.color = "#721c24";

  } else {

    msgContainer.style.backgroundColor = "#d4edda";

    msgContainer.style.color = "#155724";

  }



  // إخفاء الرسالة تلقائياً بعد 3 ثوانٍ

  setTimeout(() => {

    msgContainer.textContent = "";

    msgContainer.style.backgroundColor = "transparent";

  }, 3000);

}



function resetForm() {

  selectClinic.selectedIndex = 0;

  selectday.selectedIndex = 0;

  selecttime.selectedIndex = 0;

  patientName.value = "";

  mobileNumber.value = "";
}