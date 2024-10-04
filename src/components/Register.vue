<template>
  <div>
    <body>
      <div class="container">
        <div class="form-box">
          <h2>Create account</h2>

          <form>
            <!-- Email Field -->
            <div class="form-group">
              <label for="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            <!-- Confirm Password Field -->
            <div class="form-group">
              <label for="confirm-password">Confirm password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
              />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn">Create an account</button>

            <!-- Login Link -->
            <p class="login-link">
              Already have an account? <a href="#">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #2563eb;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #2563eb;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #1e40af;
}

.login-link {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #2563eb;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
