package UserPassword;
/* org.springframework.stereotype.Service
@Service*/
public class UserService {
    private UserDAO userDAO = new UserDAO();
    public User login(String account){
        return userDAO.getByAccount(account);
    }
    public User loginByToken(String token){
        return userDAO.getByToken(token);
    }
}