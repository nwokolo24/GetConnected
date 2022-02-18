using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class UserLike
    {
        public AppUsers SourceUser { get; set; }
        public int SourceUserId { get; set; }
        public AppUsers LikedUser { get; set; }
        public int LikedUserId { get; set; }
    }
}