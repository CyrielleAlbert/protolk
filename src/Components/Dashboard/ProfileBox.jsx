import React from "react";
import { useLinkedInProfile } from "../../Requests/useLinkedInProfile";
import { useTags } from "../../Requests/useTags";
import { Card } from "../shared/Card";

export const ProfileBox = () => {
  const { profile, token, loading } = useLinkedInProfile();
  const { tags } = useTags({ token });

  return (
    <Card positions={[2, 3, 1, 2]} title="My profile" editable={true}>
      {loading || !profile || !tags ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={
              profile.profilePicture["displayImage~"].elements[3].identifiers[0]
                .identifier
            }
            alt="Avatar"
            style={{
              borderRadius: "50%",
              width: 75,
              height: 75,
              marginTop: 24,
            }}
          />
          <p
            style={{ marginBottom: 0 }}
          >{`${profile.firstName.localized.xx_XX} ${profile.lastName.localized.xx_XX}`}</p>
          <p style={{ fontSize: 16, color: "#A6A6A6", marginTop: 0 }}>
            Frontend developer @Telia
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {tags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  style={{
                    backgroundColor: tag.color_hex,
                    color: "white",
                    borderRadius: 16,
                    padding: "4px 8px 4px 8px",
                    margin: "4px 2px 4px 2px",
                    fontSize: 10,
                  }}
                >{`#${tag.value}`}</div>
              );
            })}
          </div>
        </>
      )}
    </Card>
  );
};
