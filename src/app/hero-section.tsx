import {
  Container,
  Badge,
  Title,
  Text,
  Group,
  Button,
  Grid,
  Stack,
} from "@mantine/core";
import { IconShield, IconClock, IconStar } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section
      style={{
        padding: "100px 16px",
        backgroundImage:
          "url('https://raw.githubusercontent.com/Bagasbanuna02/assets/refs/heads/main/background/car-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.85)",
        }}
      />

      <Container
        size="md"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <Badge
          size="lg"
          mb="md"
          radius="xl"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
        >
          Terpercaya Sejak 1995
        </Badge>

        <Title
          order={1}
          mb="lg"
          style={{
            fontSize: "2.5rem",
            lineHeight: 1.3,
            fontWeight: 800,
            color: "var(--mantine-color-dark-9)",
          }}
        >
          Mitra Terpercaya untuk Perbaikan Mobil Berkualitas
        </Title>

        <Text size="lg" c="dimmed" mb="xl" maw={700} mx="auto">
          Perbaikan otomotif profesional dengan teknisi bersertifikat, suku
          cadang terjamin, dan pelayanan yang mengutamakan kepuasan Anda.
          Kembalikan kendaraan ke jalan dengan aman dan efisien.
        </Text>

        <Group justify="center" gap="md" mb={80}>
          <Button
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Dapatkan Estimasi Gratis
          </Button>
          <Button size="lg" radius="xl" variant="outline" color="blue">
            Jelajahi Layanan
          </Button>
        </Group>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" gap="sm">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--mantine-color-blue-1), var(--mantine-color-cyan-1))",
                  padding: 18,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <IconShield size={36} color="var(--mantine-color-blue-6)" />
              </div>
              <Text fw={600} size="lg" color="var(--mantine-color-blue-6)">
                Mekanik Bersertifikat
              </Text>
              <Text size="sm" c="dimmed" ta="center" maw={260}>
                Teknisi berpengalaman dengan lisensi resmi dan standar
                internasional
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" gap="sm">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--mantine-color-blue-1), var(--mantine-color-cyan-1))",
                  padding: 18,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <IconClock size={36} color="var(--mantine-color-blue-6)" />
              </div>
              <Text fw={600} size="lg" color="var(--mantine-color-blue-6)">
                Pengerjaan Cepat
              </Text>
              <Text size="sm" c="dimmed" ta="center" maw={260}>
                Sebagian besar perbaikan selesai pada hari yang sama atau
                keesokan harinya
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack align="center" gap="sm">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--mantine-color-blue-1), var(--mantine-color-cyan-1))",
                  padding: 18,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <IconStar size={36} color="var(--mantine-color-blue-6)" />
              </div>
              <Text fw={600} size="lg" color="var(--mantine-color-blue-6)">
                Layanan Bintang 5
              </Text>
              <Text size="sm" c="dimmed" ta="center" maw={260}>
                Dinobatkan sebagai bengkel mobil terbaik pilihan pelanggan lokal
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
