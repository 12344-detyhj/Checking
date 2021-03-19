package UserPassword;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/user")
public class UserController {
    UserService userService = new UserService();

    @RequestMapping("/login")

    public Object login(@RequestParam("account") String account, @RequestParam("password") String password){
        Map<String, Object> msg = new HashMap<>();
        if(account != null && password != null){
            User user;
            user = userService.login(account);
            if(user != null){
                if(user.getPassword().equals(password)){
                    String Token = user.getToken();
                    msg.put("token", Token);
                    msg.put("code", "20000");
                }
                else{
                    msg.put("code", "0");
                    msg.put("message", "密码错误");
                }
            }
            else{
                msg.put("code", "0");
                msg.put("message", "账号不存在");
            }
        }
        else{
            msg.put("code", "0");
            msg.put("message", "接口错误");
        }
        return msg;
    }

    @RequestMapping("/info")

    public Object info(@RequestParam("token") String token){
        Map<String, Object> msg = new HashMap<>();
        if(token != null){
            User user;
            user = userService.loginByToken(token);
            if(user != null){
                    String student = user.getName();
                    msg.put("identity", student);
                    msg.put("code", "20000");
            }
            else{
                msg.put("code", "0");
                msg.put("message", "账号不存在");
            }
        }
        else{
            msg.put("code", "0");
            msg.put("message", "接口错误");
        }
        return msg;
    }
}