(()=>{"use strict";module.exports = [
"[project]/.next-internal/server/app/enrollments/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00bd0cd7bfe7c12785a9b27d4126cf5c06c987beba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnrollments"],
    "40476bb4a3ea3a4f72811132300e20ae1e4399ea78",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnrollmentsByStudent"],
    "408656f97a18d629f2fffebd9749d2f193e2eac2df",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEnrollment"],
    "409a60726bc77856ab41130c23d2388746607dafbe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEnrollmentsByCourse"],
    "40cc5d2d4f25d05dc404b83d147d159d7de93d437c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnrollment"],
    "601ece719a0c981bdf12a87abfcdb020f8cb945190",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEnrollmentStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$enrollments$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/enrollments/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/enrollments/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$enrollment$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/actions/enrollment.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00bd0cd7bfe7c12785a9b27d4126cf5c06c987beba":{"name":"getEnrollments"},"40476bb4a3ea3a4f72811132300e20ae1e4399ea78":{"name":"getEnrollmentsByStudent"},"408656f97a18d629f2fffebd9749d2f193e2eac2df":{"name":"deleteEnrollment"},"409a60726bc77856ab41130c23d2388746607dafbe":{"name":"getEnrollmentsByCourse"},"40cc5d2d4f25d05dc404b83d147d159d7de93d437c":{"name":"createEnrollment"},"601ece719a0c981bdf12a87abfcdb020f8cb945190":{"name":"updateEnrollmentStatus"}},"actions/enrollment.actions.ts",""] */ __turbopack_context__.s([
    "createEnrollment",
    ()=>createEnrollment,
    "deleteEnrollment",
    ()=>deleteEnrollment,
    "getEnrollments",
    ()=>getEnrollments,
    "getEnrollmentsByCourse",
    ()=>getEnrollmentsByCourse,
    "getEnrollmentsByStudent",
    ()=>getEnrollmentsByStudent,
    "updateEnrollmentStatus",
    ()=>updateEnrollmentStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/serialize.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Enrollment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function getEnrollments() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const enrollments = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find().populate("student").populate("course").sort({
        createdAt: -1
    }).lean();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeDocument"])(enrollments);
}
async function getEnrollmentsByStudent(studentId) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(studentId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const enrollments = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
        student: studentId
    }).populate("course").sort({
        enrolledAt: -1
    }).lean();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeDocument"])(enrollments);
}
async function getEnrollmentsByCourse(courseId) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(courseId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const enrollments = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
        course: courseId
    }).populate("student").sort({
        enrolledAt: -1
    }).lean();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeDocument"])(enrollments);
}
async function createEnrollment(formData) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enrollmentSchema"].parse({
        student: formData.get("student"),
        course: formData.get("course"),
        status: formData.get("status") || "active"
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    /**
   * Check before writing so users get a clear application-level error.
   *
   * The schema's compound unique index is still the final database guard, but
   * this explicit query makes the intent readable: the same student/course pair
   * should only exist once.
   */ const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
        student: parsed.student,
        course: parsed.course
    });
    if (existing) throw new Error("This student is already enrolled in this course.");
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(parsed);
    /**
   * Revalidate every page that can show this relationship.
   *
   * The enrollments index shows the new join row, the student detail page shows
   * the student's courses, and the course detail page shows the course's
   * students.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/students/${parsed.student}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${parsed.course}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/enrollments");
}
async function updateEnrollmentStatus(id, formData) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(id);
    const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enrollmentStatusSchema"].parse(formData.get("status"));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const enrollment = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, {
        status
    }, {
        new: true
    });
    if (enrollment) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/students/${enrollment.student}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${enrollment.course}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/enrollments");
}
async function deleteEnrollment(id) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const enrollment = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
    if (enrollment) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/students/${enrollment.student}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/courses/${enrollment.course}`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/enrollments");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEnrollments,
    getEnrollmentsByStudent,
    getEnrollmentsByCourse,
    createEnrollment,
    updateEnrollmentStatus,
    deleteEnrollment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEnrollments, "00bd0cd7bfe7c12785a9b27d4126cf5c06c987beba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEnrollmentsByStudent, "40476bb4a3ea3a4f72811132300e20ae1e4399ea78", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEnrollmentsByCourse, "409a60726bc77856ab41130c23d2388746607dafbe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEnrollment, "40cc5d2d4f25d05dc404b83d147d159d7de93d437c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEnrollmentStatus, "601ece719a0c981bdf12a87abfcdb020f8cb945190", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEnrollment, "408656f97a18d629f2fffebd9749d2f193e2eac2df", null);
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongooseCache ?? {
    conn: null,
    promise: null
};
if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.mongooseCache) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.mongooseCache = cached;
}
async function connectToDatabase() {
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable in .env.local");
    }
    if (cached.conn) {
        return cached.conn;
    }
    cached.promise ??= __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, {
        bufferCommands: false
    });
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/lib/serialize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeDocument",
    ()=>serializeDocument
]);
function serializeDocument(document) {
    return JSON.parse(JSON.stringify(document));
}
}),
"[project]/lib/validations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courseSchema",
    ()=>courseSchema,
    "enrollmentSchema",
    ()=>enrollmentSchema,
    "enrollmentStatusSchema",
    ()=>enrollmentStatusSchema,
    "objectIdSchema",
    ()=>objectIdSchema,
    "studentSchema",
    ()=>studentSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .literal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z .enum>");
;
const objectIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB id");
const studentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1, "Name is required").max(100),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().email("A valid email is required").max(200)
});
const courseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1, "Title is required").max(120),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1, "Code is required").max(30),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(500).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$literal$3e$__["z"].literal(""))
});
const enrollmentStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
    "active",
    "completed",
    "dropped"
]);
const enrollmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    student: objectIdSchema,
    course: objectIdSchema,
    status: enrollmentStatusSchema.default("active")
});
}),
"[project]/models/Enrollment.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
/**
 * Enrollment is the join collection for the many-to-many relationship.
 *
 * Instead of storing a growing `courses` array on Student and a matching
 * `students` array on Course, every row in this collection says:
 *
 *   "this one student belongs to this one course."
 *
 * That small sentence is the whole relationship. It lets one student have many
 * enrollment rows, and one course also have many enrollment rows. The result is
 * a many-to-many relationship without duplicating relationship state in two
 * parent documents.
 */ const EnrollmentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    student: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Types"].ObjectId,
        ref: "Student",
        required: true
    },
    course: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Types"].ObjectId,
        ref: "Course",
        required: true
    },
    status: {
        type: String,
        enum: [
            "active",
            "completed",
            "dropped"
        ],
        default: "active",
        required: true
    },
    /**
     * Another relationship-specific field.
     *
     * `enrolledAt` records when this student joined this course. It does not
     * belong only to Student or only to Course; it belongs to the connection
     * between them, so it lives on Enrollment.
     */ enrolledAt: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    timestamps: true
});
/**
 * Protect the many-to-many pair from duplicates.
 *
 * This index means MongoDB will allow:
 *   Student A -> Course X
 *   Student A -> Course Y
 *   Student B -> Course X
 *
 * But it will reject a second copy of:
 *   Student A -> Course X
 *
 * So the pair `{ student, course }` is unique, while each individual field can
 * still appear many times across the collection.
 */ EnrollmentSchema.index({
    student: 1,
    course: 1
}, {
    unique: true
});
/**
 * Reuse an existing compiled model during Next.js development reloads.
 *
 * Next can evaluate this file more than once in development. `models.Enrollment`
 * prevents Mongoose from throwing an overwrite error when the schema is already
 * registered.
 */ const Enrollment = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["models"].Enrollment || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["model"])("Enrollment", EnrollmentSchema);
const __TURBOPACK__default__export__ = Enrollment;
}),
];})()

//# sourceMappingURL=_0ek0yq78e8hp2._.js.map