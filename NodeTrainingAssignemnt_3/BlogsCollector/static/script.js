$(()=>{
    let btn = $('#btn')
    let bloglist = $('#blogList')
    let updateId

    function refreshBlogs(){

        $.get('/blogs?mode=json',(data)=>{
            bloglist.empty()
            for(let blog of data){
                bloglist.append(
                    $('<li>')
                    .html(`<b><i> Author- </b></i> ${blog.name}  
                    <b><i> Title - </b></i> ${blog.titleOfBlog}  <br>
                    <b><i> Category - </b></i>  ${blog.categoryOfBlog}  <br>
                    <b><i> Content - </b></i>      ${blog.content}  <br>
                    <b><i> Date - </b></i>  ${blog.date} 
                    <b><i> Email- </b></i> ${blog.email}    `)
                    .append(
                         $('<button>')
                         .text(' Delete ')
                         .click((ev)=>{
                            $.post(
                                '/deleteBlog',
                                {
                                  id:blog.id 
                                },
                                (data)=>{
                                   alert("Blog deleted")
                                }
                            )
                         $(ev.target).parent().remove()
                             })
                     )
                     .append(
                        $('<button>')
                            .text('  ⬆  ')
                            .attr('class','up')
                            .click((ev)=>{
                                ev.preventDefault()
                                $(ev.target).parent()
                                    .insertBefore($(ev.target).parent().prev())
                            })
                    )
                    .append(
                        $('<button>')
                            .text('  ⬇  ')
                            .attr('class','down')
                            .click((ev)=>{
                                ev.preventDefault()
                                $(ev.target).parent()
                                    .insertAfter($(ev.target).parent().next())
                            })
                    )
                    .append(
                        $('<button>')
                            .text('Edit blog')
                            .click((ev)=>{
                                ev.preventDefault()
                                $("#overlay").toggle();
                                $("#hiddenDiv").toggle();
                                updateId= blog.id 
                                $('#updateContent').val(blog.content)
                            })
                    )
                )
            }
        })
    }


   

    refreshBlogs()

    btn.click((ev)=>{
        ev.preventDefault()
        $.post(
            '/blogs',
            {
               author:$('#author').val(),
               titleOfBlog:$('#titleOfBlog').val(),
               categoryOfBlog:$('#categoryOfBlog').val(),
               email:$('#email').val(),
               content:$('#content').val(),
               date:$('#dateOfBlog').val(),
               mode:"json"
            },
            (data)=>{
                refreshBlogs()
            }
        )
    })

    $('#update').click((ev)=>{
        ev.preventDefault()
        $.post(
            '/updateBlogs',
            {
              content:$('#updateContent').val(),
              id:updateId
            },
            (data)=>{
                $("#overlay").toggle();
                $("#hiddenDiv").toggle();
                refreshBlogs()
            }
        )
    })
    
    $("#overlay").click(()=>{
        $("#overlay").toggle();
        $("#hiddenDiv").toggle();
    });
})