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
        String Idj = "161930227";
        String selectSQL = "SELECT Id,LoginPwd,Name FROM users WHERE Id = '"+Idj+"' ";
        ResultSet rs = stmt.executeQuery(sql);//运行sql语句
        while(rs.next())
        {
            user.updateAccount(rs.getString("Id"));
            user.updatePassword(rs.getString("LoginPwd"));//其余数据待添加
            if(user.getAccount().equals(account)){
                break;
            }
            user = null;
        }
        return user;
    }
}
