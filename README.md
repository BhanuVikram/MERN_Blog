# MERN_Blog

## VERSION 1: SIMPLE

### USERS & ADMINS
- Sign Up Page
- Log In Page

### USERS
- Home Page — Displays all blogposts
- Blog Page — Displays one blogpost

### ADMIN DASHBOARD
- Create new blog
- Blogs list — edit / delete

### MODELS
- User - User / Admin
- Blog Post

### ROUTES
```
/login
/signup
/blogs
/blog:_id
```

### ADMIN ROUTES
```
/admin/create
/admin/update:_id
/admin/delete:_id
```

### MIDDLEWARES
- Authentication: Log in
- Authorization: User or Admin

### CONTROLLERS
- Login
- Signup
- Blogs
- Blog

### ADMIN CONTROLLERS
- Create
- Update
- Delete