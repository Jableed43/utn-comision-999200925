function LikeDisplay({like}) {
    
    return (
        <span className="like-count" id="likeCount">
        {/* Para escribir js en el html usamos {} */}
          {like}
        </span>
    )
}

export default LikeDisplay