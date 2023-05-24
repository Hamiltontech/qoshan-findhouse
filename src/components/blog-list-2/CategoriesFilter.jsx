import Link from "next/link";

const CategoriesFilter = () => {

    const categories = [
        {id: 1, name: "جميع الاخبار"},
        {id: 2, name: "العقاري"},
        {id: 3, name: "مشاريع وتوجهات"},
        {id: 4, name: "خاص بقوشان"},
        {id: 5, name: "سوق العقار"},
        {id: 6, name: "سوق المال"},
        {id: 7, name: "تصميم داخلي وديكورات"},
        {id: 8, name: "معلومات عقارية"}
    ]

    return (
      <ul className="mb0" dir="rtl">
        {categories.map((item)=>(
            
            <li key={item.id} className="list-inline-item">
          <Link 
          href={{
            pathname: "news",
            query: {
                category: item.name,
                    }
                }}>
                    <a>{item.name}</a>
         </Link>
        </li>
          
        ))}
      </ul>
    );
  };
  
  export default CategoriesFilter;
  