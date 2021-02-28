package UserPassword;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class UserDAO {
    public static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    public static final String URL = "jdbc:mysql://localhost:3306/mydatabase1";
    public static final String USER = "root";
    public static final String PASSWORD = "root";
    private static String Name;
    public User getByAccount(String account){
        User user = new User();
        Class.forName(DRIVER);//将数据库的驱动程序加载到容器内部
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);//获取数据库的连接
        Statement stmt = conn.createStatement();//创建数据库的操作对象
        String sql = "SELECT Id,LoginPwd,Name FROM users" ;//sql语句
        String selectSQL = "SELECT Id,LoginPwd,Name, Stat FROM users WHERE Id = '"+account+"' ";
        ResultSet rs = stmt.executeQuery(sql);//运行sql语句
        user = null;
        while(rs.next()) {
            String Account = rs.getString("Id");
            String Password = rs.getString("LoginPwd");
            String NAME = rs.getString("Name");
            int STAT = rs.getString("Stat");
            user.updateAccount(Account);
            user.updatePassword(Password);
            user.updateName(NAME);
            user.updateIdentity(STAT);//其余数据待添加
        }
        return user;
    }
}
