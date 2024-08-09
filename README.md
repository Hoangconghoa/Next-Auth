# Các kiến thức học được NextAuth.js

dùng để xác thực mã nguồn mở hoàn chỉnh cho các ứng dụng Next.js.

## Hook

- useSession() : Kiểm tra đăng nhập , lấy thông tin của người dùng đã đn, update, refresh lại, chỉ sd ở client
- getSession() : Lấy thông tin nhưng nên dùng useSession() hơn
- signIn() : Đăng nhập, chuyển hướng đăng nhập
- signOut(): Đăng xuất, chuyển hướng

## Provider

- Google,Github : tạo tài khoản để lấy ID và SECRET,thêm Providers vào trong auth.ts
