import java.util.Collection;
import java.util.HashMap;
import java.util.Set;

public class hashmap {
    public static void main(String[] args) {
        HashMap<String,String> map1 = new HashMap<>();
        map1.put("asd", "qqq");
        map1.get("asd");
        map1.remove("asd");
        if(map1.containsKey("asd")){};
        if(map1.containsKey("qqq")){};
        map1.size();

        if(map1.isEmpty()){};
        map1.clear();
        Set<String> keys= map1.keySet();
        Collection<String> values = map1.values();
        map1.putIfAbsent("orange", "asd");
        map1.replace("orange", "asd");

    }
}
