package UserPassword;

public class User {
    private String account;
    private String password;
    private String name;
    private int identity;//确认为老师还是学生,学生为0，老师为1
    private String email;
    private String phone;
    public String getPassword(){
        return password;
    }
    public String getAccount(){
        return account;
    }
    public int getIdentity(){
        return identity;
    }
    public String getName(){
        return name;
    }
    public void updateAccount(String Account){
        account = Account;
    }
    public void updatePassword(String Password){
        password = Password;
    }
    public void updateName(String Name){
        name = Name;
    }
    public void updateIdentity(int Stat){
        identity = Stat;
    }
}
