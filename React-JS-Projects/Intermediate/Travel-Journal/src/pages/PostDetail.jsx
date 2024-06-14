import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

import Thumbnail from '../images/blog1.jpeg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className="container post_detail_container">
        <div className="post-detail header">
          <PostAuthor />
          <div className="post-detail-button">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>Post Title</h1>
        <div className="post-detail-thumbnail">
          <img src={Thumbnail} alt=""/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi, reprehenderit fuga doloremque, aliquid, quos odio itaque unde debitis expedita blanditiis alias rerum mollitia dolor ex temporibus! Error nisi hic quod, quo doloribus debitis rem placeat, tenetur blanditiis recusandae voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis vel doloribus, mollitia quia tempore esse alias voluptas impedit nemo labore odit maxime, iure beatae placeat suscipit enim est! Modi voluptatum deserunt temporibus reprehenderit quo sint rem? Quod, laboriosam officia non doloremque omnis provident alias culpa eaque laborum ipsam? Nisi.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima similique, quisquam consequuntur tempore perferendis ad facere quis, sint impedit assumenda ipsum ab. Nesciunt laboriosam accusamus, rerum est quo excepturi nisi necessitatibus minus neque ab hic beatae quod deleniti sit porro laudantium officiis illum quisquam, saepe atque provident. Tenetur in omnis placeat exercitationem rerum sunt asperiores aut laudantium expedita culpa eos nostrum, perferendis corrupti aliquam facere quas eveniet ab voluptates! Quod, quidem impedit sit esse pariatur veritatis reiciendis eaque autem optio, error a voluptatum praesentium, ab eveniet? Omnis, cupiditate, voluptatibus iusto doloremque earum aliquam quas ex atque officia impedit voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione eius cupiditate, excepturi quod fugiat vero necessitatibus. Accusamus, enim esse.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima similique, quisquam consequuntur tempore perferendis ad facere quis, sint impedit assumenda ipsum ab. Nesciunt laboriosam accusamus, rerum est quo excepturi nisi necessitatibus minus neque ab hic beatae quod deleniti sit porro laudantium officiis illum quisquam, saepe atque provident. Tenetur in omnis placeat exercitationem rerum sunt asperiores aut laudantium expedita culpa eos nostrum, perferendis corrupti aliquam facere quas eveniet ab voluptates! Quod, quidem impedit sit esse pariatur veritatis reiciendis eaque autem optio, error a voluptatum praesentium, ab eveniet? Omnis, cupiditate, voluptatibus iusto doloremque earum aliquam quas ex atque officia impedit voluptate.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima similique, quisquam consequuntur tempore perferendis ad facere quis, sint impedit assumenda ipsum ab. Nesciunt laboriosam accusamus, rerum est quo excepturi nisi necessitatibus minus neque ab hic beatae quod deleniti sit porro laudantium officiis illum quisquam, saepe atque provident. Tenetur in omnis placeat exercitationem rerum sunt asperiores aut laudantium expedita culpa eos nostrum, perferendis corrupti aliquam facere quas eveniet ab voluptates! Quod, quidem impedit sit esse pariatur veritatis reiciendis eaque autem optio, error a voluptatum praesentium, ab eveniet? Omnis, cupiditate, voluptatibus iusto doloremque earum aliquam quas ex atque officia impedit voluptate.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima similique, quisquam consequuntur tempore perferendis ad facere quis, sint impedit assumenda ipsum ab. Nesciunt laboriosam accusamus, rerum est quo excepturi nisi necessitatibus minus neque ab hic beatae quod deleniti sit porro laudantium officiis illum quisquam, saepe atque provident. Tenetur in omnis placeat exercitationem rerum sunt asperiores aut laudantium expedita culpa eos nostrum, perferendis corrupti aliquam facere quas eveniet ab voluptates! Quod, quidem impedit sit esse pariatur veritatis reiciendis eaque autem optio, error a voluptatum praesentium, ab eveniet? Omnis, cupiditate, voluptatibus iusto doloremque earum aliquam quas ex atque officia impedit voluptate.
        </p>
      </div>
    </section>
  )
}

export default PostDetail