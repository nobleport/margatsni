
json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.partial! 'api/posts/post', post: post
        end
    end
end

json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :body, :id, :post_id, :username
            end
        end
    end
end