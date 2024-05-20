## مقدمة
يُعد رفع الملفات خاصة الصورة من أساسيات أي موقع او تطبيق، لذا وجب الأهتمام بهذا الأمر ومعرفة الطرق المختلفة لرفع الصور 

## الطرق المختلفة لرفع الصور
- تخزين الصور في قاعدة البيانات على هيئة  `BLOB`  وهي اختصار لـ  Binary Large Object ونقوم هنا بتخزين الصور على هيئة Binary Object، ولكن من عيوب هذه الطريقة ان حجم قاعدة البيانات سيصبح ضخم جدا وسيكون الأداء بطئ للغاية 
- تخزين الصور على السيرفر الخاص بك  ولكن مشكلة هذه الطريقة  ان كثرة الصور ستصبح عبئ على السيرفر الخاص بك
- تخزين الصور على السحابة `Cloud` وهذه الطريقة تُعد من أفضل الممارسات  `Best Practices`  لرفع الصور، وهذا هو موضوعنا اليوم فدعونا نبدأ على بركة الله

## رفع الصور على cloudinary
اولاً نحتاج ان نقوم بـ تنزيل الـ Multer package والتي تتعامل مع انواع البيانات المختلفة التي تأتي في هيئة `data-form`  مثل النصوص والملفات المختلفة كالصور
```bash
npm install multer
```

نقوم بإستدعاء الـ Multer
```js
const multer = require('multer');
```

نقوم بكتابة الكود الخاص بالـ Multer Configuration
```js
const uploadFileCloud = () => {
	// هنا نعرف المكان الخاص بالمالتر لتخزين الملفات المرفوعة 
  const storage = multer.diskStorage();
	// نُعرف الميديلوير الخاص بالمالتر ونخبره بكيفية تجزين الملفات المرفوعة
  const multerUpload = multer(storage);
	// نقوم بإرجاع الميديلوير الخاص بالمالتر لإستخدامه لاحقًا 
  return multerUpload;
};
```

نحتاج لتنزيل Cloudinary package
```bash
npm install cloudinary
```

نقوم بإستدعاء الـ Cloudinary
```bash
const cloudinary = require('cloudinary').v2; 
```

نقوم بكتابة الكود الخاص بالـ  Cloudinary Configuration، سنحتاج لإنشاء حساب على موقع cloudinary ونقوم بجلب البيانات التالية مثل cloud_name و  api_key و api_secret ستجدها في الـ Dashboard بعد تسجيل الدخول    
```js
const cloudinary = cloudinary.config({ 
  cloud_name: "pqquxjsvg", 
  api_key: "58237316995584", 
  api_secret: "mlSb9SNXULmPQlA7OOBGKFM7STo"
	// ملحوطة هذه البيانات حساسة لذا يُرجى وضعها في  الـ  Enviroment variables 
	// لا تستخدم هذه البيانات لأني قمت  بوضع بيانات عشوائية
});
```

هنا نقول بكتابة Endpoint بسيطة مهمتها هي رفع صورة على cloudinary
```js
app.post('/uploadProfileImg', uploadFileCloud().single('file'), async (req, res) => {
	// اوبجكت يحتوى على المعلومات الخاصة بالصورة
  let imgObj = { secureUrl: undefined, publicId: undefined };
	// التحقق من ان المستخدم قام بوضع الصورة في الـ Request  
  if (req.file) {
    try {
		// رفع الصورة على cloudinary 
      const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path);

		// وضع بيانات الصورة في الأوبجكت
      imgObj.secureUrl = secure_url;
      imgObj.publicId = public_id;
    } catch (error) {
		// هندلة أي خطأ قد يحدث من cloudinary
      return res.status(500).json({
        status: "error",
        message: "Failed to upload image to Cloudinary"
      });
    }
  } else {
	  // رسالة خطأ إذا لم يضع المستخدم صورة في الـ Request
    return res.status(400).json({
      status: "fail",
      message: "Please provide an image file!"
    });
  }

	// وأخيراً إرجاع بيانات الصورة للمستخدم
  return res.status(201).json({
    status: "success",
    image: imgObj
  });
});
```
في الكود السابق  secureUrl يعني الـ URL الخاص بالصورة على cloudinary والذي من خلاله الوصول للصورة، والـ publicId يعبر عن ID خاص بالصورة على cloudinary ويمكننا من خلاله تعديل او حذف الصورة مستقبلاً

## خاتمة
كان هذا شرح بسيط لكيفية رفع صورة على سيرفر  cloudinary ويمكننا أيضاً إنشاء مجلد خاص بالصور او مجلد خاص بكل مستخدم إذا كان لديك تطبيق يحتوى على مستخدمين، هذه نبذة بسيطة ويمكنك التعمق ومعرفة المزيد عن كيفية عمل cloudinary من الـ documents الخاصة بها😉 