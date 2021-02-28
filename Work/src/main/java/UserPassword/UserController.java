package UserPassword;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.HashMap;
import java.util.Map;

public class UserController {
    UserService userService = new UserService();

    @RequestMapping(value = "/login");

    public Object login(@RequestParam("account") String account, @RequestParam("password") String password){
        Map<String, Object> msg = new HashMap<>();
        if(account != null && password != null){
            User user;
            user = userService.login(account);
            if(user != null){
                if(user.getPassword().equals(password)){
                    msg.put("loginStatus", true);
                    msg.put("identity", user.getIdentity());
                    msg.put("userName", user.getName());
                }
                else{
                    msg.put("loginStatus", false);
                    msg.put("reason", "密码错误");
                }
            }
            else{
                msg.put("loginStatus", false);
                msg.put("reason", "账号不存在");
            }
        }
        else{
            msg.put("loginStatus", false);
            msg.put("reason", "接口错误");
        }
        return msg;
    }
}