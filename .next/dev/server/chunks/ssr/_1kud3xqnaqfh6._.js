(()=>{"use strict";module.exports = [
"[project]/.next-internal/server/app/students/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/student.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00d43902339e89d7957c1c4ed95d450a5fc41200eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudents"],
    "404add29fcbf99c24a383e5cf29d8779ced3d1122a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStudent"],
    "4079200ab78d54b252f6aa1f7bfba3e38b5d6720eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudentById"],
    "40beeb9b1ddae674c6856f0a595dd820bc94aebe97",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteStudent"],
    "6021d61ebb6b102b0d73f749886bf445606b2819d6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStudent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$students$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/students/page/actions.js { ACTIONS_MODULE0 => "[project]/actions/student.actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/student.actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/students/page/actions.js { ACTIONS_MODULE0 => \"[project]/actions/student.actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$student$2e$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/student.actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/actions/student.actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00d43902339e89d7957c1c4ed95d450a5fc41200eb":{"name":"getStudents"},"404add29fcbf99c24a383e5cf29d8779ced3d1122a":{"name":"createStudent"},"4079200ab78d54b252f6aa1f7bfba3e38b5d6720eb":{"name":"getStudentById"},"40beeb9b1ddae674c6856f0a595dd820bc94aebe97":{"name":"deleteStudent"},"6021d61ebb6b102b0d73f749886bf445606b2819d6":{"name":"updateStudent"}},"actions/student.actions.ts",""] */ __turbopack_context__.s([
    "createStudent",
    ()=>createStudent,
    "deleteStudent",
    ()=>deleteStudent,
    "getStudentById",
    ()=>getStudentById,
    "getStudents",
    ()=>getStudents,
    "updateStudent",
    ()=>updateStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/serialize.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Enrollment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Student.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function getStudents() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const students = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find().sort({
        createdAt: -1
    }).lean();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeDocument"])(students);
}
async function getStudentById(id) {
    const parsedId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].safeParse(id);
    if (!parsedId.success) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    const student = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
    if (!student) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$serialize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeDocument"])(student);
}
async function createStudent(formData) {
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentSchema"].parse({
        name: formData.get("name"),
        email: formData.get("email")
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(parsed);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/students");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/students");
}
async function updateStudent(id, formData) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(id);
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentSchema"].parse({
        name: formData.get("name"),
        email: formData.get("email")
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, parsed, {
        runValidators: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/students");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/students/${id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/students/${id}`);
}
async function deleteStudent(id) {
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectIdSchema"].parse(id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDatabase"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Enrollment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].deleteMany({
        student: id
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Student$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/students");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/enrollments");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/students");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudents, "00d43902339e89d7957c1c4ed95d450a5fc41200eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudentById, "4079200ab78d54b252f6aa1f7bfba3e38b5d6720eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createStudent, "404add29fcbf99c24a383e5cf29d8779ced3d1122a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStudent, "6021d61ebb6b102b0d73f749886bf445606b2819d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteStudent, "40beeb9b1ddae674c6856f0a595dd820bc94aebe97", null);
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
"[project]/models/Student.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const StudentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
}, {
    timestamps: true
});
const Student = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["models"].Student || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["model"])("Student", StudentSchema);
const __TURBOPACK__default__export__ = Student;
}),
];})()

//# sourceMappingURL=_1kud3xqnaqfh6._.js.map