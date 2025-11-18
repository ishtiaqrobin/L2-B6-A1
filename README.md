#১. Interface এবং Type এর মধ্যে পার্থক্য:
TypeScript এ আমরা Interface এবং Type উভয়কেই অবজেক্ট এর শেইপ, টাইপ বা কাঠামো কেমন হবে তা নির্ধারণ করতে ব্যবহার করে থাকি। তবে Interface এবং Type এর ব্যবহারে মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

১. অবজেক্ট শেপ ডিফাইন করতে দুইটিই ব্যবহৃত হয়। যেমনঃ
উদাহরণ:
interface User {
name: string;
age: number;
}

type UserType = {
name: string;
age: number;
};

২. Interface সহজে extend করা যায়। এক বা একাধিক Interface কে সহজেই extends করা যায়। যেমনঃ
এখানে IUser: একটি বেসিক User টাইপ ডিফাইন করছে।
interface IUser {
name: string;
age: number;
}

এবং এইখানে IUserWithRole: IUser কে extend করেছে এবং একটি নতুন ফিল্ড (role) যোগ করেছে।
অর্থাৎ IUser এর সব প্রোপার্টি + নতুন role প্রোপার্টিও থাকবে।
interface IUserWithRole extends IUser {
role: "admin" | "user";
}
এখানে role দুটি মান নিতে পারবে, admin অথবা user

২. অবজেক্ট টাইপ, অ্যারে ট্যাপ, ফাঙ্কশন টাইপ সব জায়গায় Interface ব্যবহার করা যায়। যেমনঃ
এখন আমরা দেখবো কিভাবে অবজেক্ট টাইপ, অ্যারে ট্যাপ, ফাঙ্কশন টাইপ সব জায়গায় Interface কে ব্যবহার করতে পারি।

৩. Type বেশি flexible:
Type alias দিয়ে union, intersection, primitive, function type সবকিছু তৈরি করা যায়।
type Status = "success" | "error" | "pending";
type ID = string | number;
type Add = (a: number, b: number) => number;

কিন্তু Interface, Type alias এর মতো এইভাবে primitive ও union টাইপ তৈরি করতে পারে না।

#২. keyof কীওয়ার্ডের ব্যবহার:

১. TypeScript এ keyof ব্যবহার করা হয় কোনো অবজেক্ট টাইপের সব প্রপার্টি কী (key) গুলোর ইউনিয়ন টাইপ পেতে। অর্থাৎ, একটি অবজেক্টের সব প্রপার্টি নামের সমষ্টি হিসেবে একটি টাইপ তৈরি করতে আমার keyof কীওয়ার্ড ব্যবহার করে থাকি।

type User = {
name: string;
age: number;
email: string;
address: string;
};

type UserKeys = keyof User;
UserKeys = "name" | "age" | "email" | "address";

অর্থাৎ আমরা keyof কীওয়ার্ড ব্যবহার করে কোনো (User) অবজেক্ট এর সব key গুলা পেতে পারি।
