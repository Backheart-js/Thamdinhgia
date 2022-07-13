function Login(props) {
    return ( 
      <main className="form-signin">
        <form> 
          <img src="/thamdinh-lg-192.png" />     
            <h1 className="h3 mb-3 fw-normal">Đăng nhập hệ thống</h1>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="nguyenvana" />
                <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Đăng nhập</button>
            <div className="text-end">
            <label >Quên mật khẩu</label>
            </div>
           
        </form>
      </main>);
  }
  
  export default Login;